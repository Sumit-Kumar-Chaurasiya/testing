export interface StatCardData {
    title: string;
    value: string;
    change: string;
    description: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
}

export interface Activity {
    id: number;
    user: string;
    action: string;
    time: string;
}