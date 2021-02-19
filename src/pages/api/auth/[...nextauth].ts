import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default (req: NextApiRequest, res: NextApiResponse) => {
    NextAuth(req, res, {
        providers: [
            Providers.GitHub({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
            }),
        ],
        debug: process.env.NODE_ENV === 'development',
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SCREET,
        },
        session: {
            jwt: true,
            maxAge: 60 * 60 * 24 * 30, // 30 days
        },
        adapter: Adapters.Prisma.Adapter({ prisma }),
    });
};
