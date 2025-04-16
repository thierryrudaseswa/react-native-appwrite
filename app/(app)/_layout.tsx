import {Slot, Redirect} from 'expo-router'
import { useAuth } from '@/context/AuthContext'

export default function AppLayout(){
    const {session} = useAuth()
    return !session ? <Redirect  href="/SignIn"/> : <Slot/>
}   