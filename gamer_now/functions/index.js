// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const stripe = require('stripe')(functions.config().stripe.token);
// // const currency = functions.config().stripe.currency || ;

// admin.initializeApp(functions.config().firebase);

// exports.createStripeCharge = functions.firestore.document('stripe_customers/{userId}/charges/{id}').onCreate(async (snap, context) => {
//     const val = snap.data();
//     try {
//         // Look up the Stripe customer id written in createStripeCustomer
//         const snapshot = await admin.firestore().collection(`stripe_customers`).doc(context.params.userId).get()
//         const snapval = snapshot.data();
//         const customer = snapval.customer_id
//         // Create a charge using the pushId as the idempotency key
//         // protecting against double charges
//         const amount = val.amount;
//         const idempotencyKey = context.params.id;
//         const charge = {amount, currency, customer};
//         if (val.source !== null) {
//         charge.source = val.source;
//         }
//         const response = await stripe.charges.create(charge, {idempotency_key: idempotencyKey});
//         // If the result is successful, write it back to the database
//         return snap.ref.set(response, { merge: true });
//     } catch(error) {
//         // We want to capture errors and render them in a user-friendly way, while
//         // still logging an exception with StackDriver
//         console.log(error);
//         await snap.ref.set({error: userFacingMessage(error)}, { merge: true });
//         return "An error has occured";
//     }
// });

// exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
//     const customer = await stripe.customers.create({email: user.email});
//     return admin.firestore().collection('stripe_customers').doc(user.uid).set({customer_id: customer.id});
//   });

//   exports.cleanupUser = functions.auth.user().onDelete(async (user) => {
//     const snapshot = await admin.firestore().collection('stripe_customers').doc(user.uid).get();
//     const customer = snapshot.data();
//     await stripe.customers.del(customer.customer_id);
//     return admin.firestore().collection('stripe_customers').doc(user.uid).delete();
//   });

// // Sanitize the error message for the user
// function userFacingMessage(error) {
//     return error.type ? error.message : 'An error occurred, developers have been alerted';
//   }