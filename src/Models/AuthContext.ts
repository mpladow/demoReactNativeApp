type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn(email:any, password:any): Promise<void>;
    signOut(): void;
};

type AuthData = {
    token: string;
    email: string;
    name: string;
};