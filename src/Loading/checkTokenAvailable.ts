import { useHistory } from 'react-router-dom';
import { session } from '../Login/session'
export function CheckTokenAvailable() {
    const history = useHistory()
    if(session.token === undefined) {
        history.push('/signin')
    }
    else {
        history.push('/list')
    }
}