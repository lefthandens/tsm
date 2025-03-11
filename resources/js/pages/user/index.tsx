import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

type CreateCompeform = {
    name: string;
    username: string;
};

export default function Users() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<CreateCompeform>>({
        name: '',
        username: '',
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        console.log(data.name);
        alert(data.name);

        // post(route('register'), {
        //     onFinish: () => reset('name', 'username'),
        // });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex-inline flex w-full justify-between p-4">
                    <div>
                        <Input id="search" type="text" tabIndex={2} autoComplete="search-text" placeholder="text" />
                        <InputError />
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Create Competition</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <form className="flex flex-col gap-6" onSubmit={submit}>
                                    <DialogHeader>
                                        <DialogTitle>Create Competition</DialogTitle>
                                        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Search..."
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Username
                                            </Label>
                                            <Input
                                                id="username"
                                                value={data.username}
                                                onChange={(e) => setData('username', e.target.value)}
                                                placeholder="Search..."
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            Create account
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Create Competition</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <form className="flex flex-col gap-6" onSubmit={submit}>
                                    <DialogHeader>
                                        <DialogTitle>Create Competgagagaition</DialogTitle>
                                        <DialogDescription>Makgagaga.</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4"></div>
                                        <div className="grid grid-cols-4 items-center gap-4"></div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            Create account
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
