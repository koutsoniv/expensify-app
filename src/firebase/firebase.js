import * as firebase from 'firebase'

var firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses').on('value', (snapshot) => {
// // 	const expenses = []

// // 	snapshot.forEach((childSnapshot) => {
// // 		expenses.push({
// // 			id: childSnapshot.key,
// // 			...childSnapshot.val()
// // 		})
// // 	})

// // 	console.log(expenses)
// // })

// // database.ref('expenses').push({
// // 	description: 'Udemy Courses',
// // 	amount: 2000,
// // 	note: '',
// // 	createdAt: 15333909090
// // })

// // database.ref('notes').push({
// // 	title: 'Courses',
// // 	body: 'React'
// // })

// // database.ref('notes').set(notes)

// // const onDataChane = database.ref().on('value', (snapshot) => {
// // 	const data = snapshot.val()
// // 	console.log(`${data.name} is a ${data.job.title} at ${data.job.company} `)
// // })

// // setTimeout(() => {
// // 	database.ref('job/title').set('Junior Software Developer')
// // }, 3500)

// // const onValuechange = database.ref().on(
// // 	'value',
// // 	(snapshot) => {
// // 		console.log(snapshot.val())
// // 	},
// // 	(e) => {
// // 		console.log('Error with data fetching: ', e)
// // 	}
// // )

// // setTimeout(() => {
// // 	database.ref('age').set(66)
// // }, 3500)

// // setTimeout(() => {
// // 	database.ref().off(onValuechange)
// // }, 7000)

// // setTimeout(() => {
// // 	database.ref('age').set(34)
// // }, 10000)

// // database
// // 	.ref('location/city')
// // 	.once('value')
// // 	.then((snapshot) => {
// // 		const val = snapshot.val()
// // 		console.log(val)
// // 	})
// // 	.catch((e) => {
// // 		console.log('Error fetching data: ', e)
// // 	})

// // database
// // 	.ref()
// // 	.set({
// // 		name: 'Bill Koutsonikos',
// // 		age: 33,
// // 		stressLevel: 6,
// // 		job: {
// // 			title: 'Software Developer',
// // 			company: 'Google'
// // 		},
// // 		location: {
// // 			city: 'Sionn',
// // 			country: 'Switzerland'
// // 		}
// // 	})
// // 	.then(() => {
// // 		console.log('Data is saved!!')
// // 	})
// // 	.catch((e) => {
// // 		console.log('This failed : ', e)
// // 	})

// // database
// // 	.ref('/isSingle')
// // 	.remove()
// // 	.then(() => {
// // 		console.log('success in removing data')
// // 	})
// // 	.catch((e) => {
// // 		console.log('error removing: ', e)
// // 	})

// // database.ref().update({
// // 	stressLevel: 9,
// // 	'job/company': 'Amazon',
// // 	'location/city': 'Seattle'
// // })
