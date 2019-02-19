const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
  .document('emails/{id}')
  .onCreate(event => {

    const data = event.data();

    const msg = {
      to: data.email,
      from: 'casey@designerrecon.com',
      subject: 'test',
      templateId: 'd-f40775ad30d849dbac7a538006295df1'
      };
      return sgMail.send(msg);
  });
