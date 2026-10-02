"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import { ArrowUpRight, BookOpen, Clock3, LibraryBig, MoreHorizontal, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useState, type FormEvent } from "react";
import { Button } from "~/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { BrandLogo } from "~/components/brand-logo";
import { NotebookIconPicker } from "~/features/workspaces/components/notebook-icon-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Skeleton } from "~/components/ui/skeleton";
import { Textarea } from "~/components/ui/textarea";
import {
  useCreateWorkspace,
  useDeleteWorkspace,
  useWorkspaces,
} from "~/features/workspaces/hooks/use-workspaces";

type PendingDelete = { id: string; title: string };

type WorkspaceForm = {
  title: string;
  description: string;
  icon: string;
};

function emptyWorkspaceForm(): WorkspaceForm {
  return {
    title: "",
    description: "",
    icon: "📗",
  };
}

function formatDate(value: Date | string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(String(value)));
}

function CreateWorkspaceDialog() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyWorkspaceForm);
  const createWorkspace = useCreateWorkspace();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createWorkspace.mutate(
      {
        title: form.title,
        description: form.description || undefined,
        icon: form.icon,
      },
      {
        onSuccess: () => {
          setForm(emptyWorkspaceForm());
          setOpen(false);
        },
      },
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button size="lg" variant="brand" className="w-full sm:w-auto">
            <Plus data-icon="inline-start" />
            New notebook
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a notebook</DialogTitle>
          <DialogDescription>
            Give your research a home. You can add sources after creating it.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={submit}>
          <label className="grid gap-2 type-body-sm font-medium">
            Title
            <Input
              autoFocus
              required
              maxLength={120}
              placeholder="e.g. Distributed systems notes"
              value={form.title}
              onChange={(event) =>
                setForm((current) => ({ ...current, title: event.target.value }))
              }
            />
          </label>
          <label className="grid gap-2 type-body-sm font-medium">
            Description
            <Textarea
              maxLength={500}
              placeholder="What are you trying to understand?"
              value={form.description}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
            />
          </label>
          <div className="grid gap-2 type-body-sm font-medium">
            Icon
            <NotebookIconPicker
              onChange={(icon) =>
                setForm((current) => ({ ...current, icon }))
              }
              value={form.icon}
            />
          </div>
          {createWorkspace.error && (
            <p className="type-caption text-destructive" role="alert">
              {createWorkspace.error.message}
            </p>
          )}
          <DialogFooter>
            <Button type="submit" variant="brand" disabled={createWorkspace.isPending}>
              {createWorkspace.isPending ? "Creating..." : "Create notebook"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function WorkspaceDashboard() {
  const { user } = useUser();
  const [search, setSearch] = useState("");
  const [pendingDelete, setPendingDelete] = useState<PendingDelete | null>(null);
  const deleteWorkspace = useDeleteWorkspace();
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());
  const workspacesQuery = useWorkspaces();
  const workspaces = workspacesQuery.data ?? [];
  const filteredWorkspaces = workspaces.filter((workspace) => {
    if (!deferredSearch) return true;
    return `${workspace.title} ${workspace.description ?? ""}`
      .toLowerCase()
      .includes(deferredSearch);
  });

  function confirmDelete() {
    if (!pendingDelete) return;
    deleteWorkspace.mutate(
      { workspaceId: pendingDelete.id },
      { onSuccess: () => setPendingDelete(null) },
    );
  }

  return (
    <main className="min-h-svh bg-canvas text-foreground">
      <header className="border-b border-border/70 bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 type-title">
            <BrandLogo className="size-8 rounded-lg" size={32} />
            <span className="hidden sm:inline">Studybook LM</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden type-caption text-muted-foreground md:inline">
              {user?.firstName ? `Welcome back, ${user.firstName}` : "Your learning desk"}
            </span>
            <UserButton />
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <section className="relative overflow-hidden rounded-xl border border-border bg-card p-6 sm:p-10">
          <div className="absolute -right-24 -top-32 size-80 rounded-full bg-brand/5 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 type-eyebrow uppercase text-brand">
                <LibraryBig className="size-4" />
                Research, remembered
              </p>
              <h1 className="mt-4 max-w-xl type-heading-1">
                What are you learning today?
              </h1>
              <p className="mt-4 max-w-lg type-body-md text-muted-foreground">
                Keep your sources together and turn them into understanding,
                one notebook at a time.
              </p>
            </div>
            <CreateWorkspaceDialog />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="type-eyebrow uppercase text-muted-foreground">
                Your library
              </p>
              <h2 className="mt-2 type-heading-2">Notebooks</h2>
              <p aria-live="polite" className="mt-1 type-caption text-muted-foreground">
                {deferredSearch
                  ? `${filteredWorkspaces.length} of ${workspaces.length} matching “${deferredSearch}”`
                  : `${workspaces.length} ${workspaces.length === 1 ? "notebook" : "notebooks"}`}
              </p>
            </div>
            <label className="relative block w-full sm:max-w-xs">
              <span className="sr-only">Search notebooks</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="h-10 pl-9"
                placeholder="Search notebooks"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          {workspacesQuery.isPending ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {["a", "b", "c", "d", "e", "f"].map((item) => (
                <Skeleton className="h-52 rounded-xl" key={item} />
              ))}
            </div>
          ) : workspacesQuery.error ? (
            <div className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-6 type-caption text-destructive">
              Unable to load notebooks: {workspacesQuery.error.message}
            </div>
          ) : filteredWorkspaces.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-border p-10 text-center sm:p-16">
              <BookOpen className="mx-auto size-8 text-muted-foreground" />
              <h3 className="mt-4 type-heading-3">
                {search ? "No notebooks match your search" : "Start your first notebook"}
              </h3>
              <p className="mx-auto mt-2 max-w-sm type-body-sm text-muted-foreground">
                {search
                  ? "Try a different title or description."
                  : "Create a focused space for the sources and questions you want to explore."}
              </p>
              {search ? (
                <div className="mt-5">
                  <Button onClick={() => setSearch("")} variant="outline">
                    Clear search
                  </Button>
                </div>
              ) : (
                <div className="mt-5">
                  <CreateWorkspaceDialog />
                </div>
              )}
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredWorkspaces.map((workspace) => (
                <div
                  className="group relative flex min-h-52 flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/40 focus-within:ring-3 focus-within:ring-ring"
                  key={workspace.id}
                >
                  <Link
                    aria-label={`Open ${workspace.title}`}
                    className="absolute inset-0 z-0 rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring"
                    href={`/workspace/${workspace.id}`}
                  />
                  <div className="pointer-events-none relative z-10 flex min-h-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-11 place-items-center rounded-xl border border-border bg-background text-lg">
                        {workspace.icon || <BookOpen className="size-5 text-muted-foreground" />}
                      </span>
                      <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <div className="mt-9">
                      <h3 className="truncate type-title">
                        {workspace.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 min-h-10 type-caption text-muted-foreground">
                        {workspace.description || "A new space for your next line of inquiry."}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-5 type-caption text-muted-foreground">
                      <Clock3 className="size-3.5" />
                      Updated {formatDate(workspace.updatedAt)}
                    </div>
                  </div>
                  <div className="absolute right-6 top-6 z-20">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            aria-label={`Actions for ${workspace.title}`}
                            onClick={(event) => event.preventDefault()}
                            size="icon-sm"
                            variant="ghost"
                          />
                        }
                      >
                        <MoreHorizontal />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          render={<Link href={`/workspace/${workspace.id}`} />}
                        >
                          Open notebook
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => {
                            setPendingDelete(workspace);
                          }}
                          variant="destructive"
                        >
                          Delete notebook
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <AlertDialog
        open={pendingDelete !== null}
        onOpenChange={(open) => {
          if (!open) setPendingDelete(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete “{pendingDelete?.title}”?</AlertDialogTitle>
            <AlertDialogDescription>
              This cannot be undone. Every source and Studio artifact in this
              notebook will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          {deleteWorkspace.error && (
            <p className="type-caption text-destructive" role="alert">
              {deleteWorkspace.error.message}
            </p>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={deleteWorkspace.isPending}
              onClick={confirmDelete}
              variant="destructive"
            >
              {deleteWorkspace.isPending ? "Deleting..." : "Delete notebook"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
