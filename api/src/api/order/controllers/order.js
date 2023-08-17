import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: '2022-11-15',
});

'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi })=>({
    async create(ctx) {
        const {email, products, } = ctx.request.body;
        try {
            const session = stripe.checkout.sessions.create({
                mode: "payment",
                success_url: `${process.env.CLIENT_URL}/success=true`,
                cancel_url: `${process.env.CLIENT_URL}/success=false`
            });
        } catch (err) {
            ctx.response.status=500;
            return err;
        }
    }
}));
