import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)
export const db = firebase
    .initializeApp({ projectId: 'testbase-24845' })
    .firestore()