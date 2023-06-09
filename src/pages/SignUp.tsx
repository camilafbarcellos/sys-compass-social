import '../styles/loginSignup.css';
import Form from '../components/signup/Form';
import Header from '../components/signup/Header';

export default function SignUp() {
    // signup page split in half for the form and image
    return (
        <section>
            <section className='container'>
                <section className='left'>
                    <Header/>
                    <Form/>
                </section>
                <section className='right'/>
            </section>
        </section>
    );
}
