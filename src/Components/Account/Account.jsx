import React,{useRef} from 'react';
import { UpdateProfile } from '../../Reducers/ReducerAuth';
import { useDispatch } from 'react-redux';
import './Account.css';

export default function Account() {
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();

        const updateData = {
            firstName: event.target.firstname.value, // Corrected
            lastName: event.target.lastname.value,   // Corrected
            email: event.target.email.value,
            address: event.target.address.value,
            currentPassword: event.target.password.value, // Corrected
            newPassword: event.target.newpassword.value,  // Corrected
            confirmNewPassword: event.target.currentnewpassword.value, // Corrected
        };

        dispatch(UpdateProfile(updateData));
        console.log(updateData);

        if (formRef.current) {
            formRef.current.reset();
        }


    };

    return (
        <>
            <div className="account">
                <div className="accounturl mt-5 d-flex align-items-center justify-content-between">
                    <p><span className='Home'>Home / </span><span>My Account</span></p>
                    <p>Welcome!<span className='proname'>profileName</span></p>
                </div>
                <div className="accountContainer mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Manage My Account</h5>
                            <ul>
                                <li className='mt-3'><span>My Profile</span></li>
                                <li>Address Book</li>
                                <li>My Payment Options</li>
                            </ul>
                            <h5>My Orders</h5>
                            <ul>
                                <li className='mt-3'>My Returns</li>
                                <li>My Cancellations</li>
                            </ul>
                            <h5 className='mt-3'>My WishList</h5>
                        </div>
                        <div className="col-md-9 accountbox">
                            <div className="acctitle">
                                <h3>Edit Your Profile</h3>
                            </div>
                            <form onSubmit={handleSubmit} ref={formRef}>
                                <div className="row gx-5 mt-3">
                                    <div className="col">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="Md" name='firstname' required />
                                    </div>
                                    <div className="col">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Rimel" name='lastname' required />
                                    </div>
                                </div>
                                <div className="row gx-5 mt-3">
                                    <div className="col">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="rimel1111@gmail.com" name='email' required />
                                    </div>
                                    <div className="col">
                                        <label>Address</label>
                                        <input type="text" className="form-control" placeholder="Kingston, 5236, United State" name='address' required />
                                    </div>
                                </div>
                                <div className="row mt-3 passrow">
                                    <label>Password Changes</label>
                                    <input type="password" className="form-control" placeholder="Current Password" name='password' required />
                                    <input type="password" className="form-control mt-4" placeholder="New Password" name='newpassword' required />
                                    <input type="password" className="form-control mt-4" placeholder="Confirm New Password" name='currentnewpassword' required />
                                </div>
                                <div className="accbtns d-flex align-items-center justify-content-end mt-3">
                                    <button type='button' className='btn d-block'>Cancel</button>
                                    <button type='submit' className='savebtn d-block'>Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
