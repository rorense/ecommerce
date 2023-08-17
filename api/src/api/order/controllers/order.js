// const stripe = require('stripe')(process.env.STRIPE_KEY)

'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order'
// , ({ strapi })=>({
    
//     async create(ctx) {
//         const { products, } = ctx.request.body;

//         const lineItems = await Promise.all(
//             products.map(async (products)=> {
//                 const item = await strapi
//                 .service("api:product.product")
//                 .findOne(products.id);

//                 return {
//                     price_data: {
//                         currency:"nzd",
//                         product_data: {
//                             name: item.title,
//                         },
//                         unit_amount: item.price * 100
//                     },
//                     quantity: item.quantity,
//                 };
//             })
//         );

//         try {
//             const session = stripe.checkout.sessions.create({
//                 mode: "payment",
//                 success_url: `${process.env.CLIENT_URL}?success=true`,
//                 cancel_url: `${process.env.CLIENT_URL}?success=false`,
//                 line_items: lineItems,
//                 shipping_address_collection: { allowed_countries:["NZ"] },
//                 payment_method_types: ["card"],
//             });

//             await strapi.service("api::order:order").create({
//                 data: {
//                     products, 
//                     stripeId: (await session).id,
//                 },
//             });

//             return { stripeSession: session };

//         } catch (err) {
//             ctx.response.status=500;
//             return err;
//         }
//     }
// })
);
