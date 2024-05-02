import bcrypt from 'bcrypt';
import prisma from "@/libs/prisma";
import { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
          credentials: {},
          async authorize(credentials: any) {
            const { email, password } = credentials as {
              email: string;
              password: string;
            };
    
            const userFound = await prisma.users.findUnique({
              where: {
                email,
              },
            });
    
            if (!userFound) {
              throw new Error("usuario y contraseña incorrectos");
            }
    
            const matchPassword = await bcrypt.compare(
              password,
              userFound.password
            );
    
            if (!matchPassword) {
              throw new Error("usuario y contraseña no validos");
            }
    
            return {
              id: userFound.id + "",
              name: userFound.name,
              email: userFound?.email,
              image: "",
              lastname: userFound.lastname,
              role: userFound.role,
              empresa: userFound.empresaId,
            };
          },
        }),
      ],
      callbacks: {
        jwt({ token, user }) {
          if (user) {
            token = { ...token, ...user };
          }
    
          return token;
        },
        async session({ session, token }) {
          if (token) {
            session.user = {
              ...session.user,
              ...token,
            } as any;
          }
    
          return session;
        },
      },
      pages: {
        signIn: "/auth/login",
      }
}