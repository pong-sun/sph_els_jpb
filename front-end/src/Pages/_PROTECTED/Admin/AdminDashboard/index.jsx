import React from 'react';
import './admin-dashboard.css';
import Toast from 'App/Swal2/toast';
import { useCookies } from 'react-cookie';
import { logout } from 'API/userAPI';

export default function AdminDashoard() {
  const [cookie, , removeCookie] = useCookies();

  return (
    <>
      <img src={cookie.user.cover_url} alt="cover" />
      <div className="dash-container">
        <div className="dash-content">
          <h1>Welcome Admin</h1>
          <br />
          <div className="profile">
            <img src={cookie.user.avatar_url} alt="pp" />
          </div>
          <p>
            <strong>Name</strong>:
            {`${cookie.user.first_name} ${cookie.user.last_name}`}
          </p>
          <p>
            <strong>Email</strong>:{cookie.user.email}
          </p>
          <button
            onClick={() => {
              logout({
                user_id: cookie.user.id,
              });

              removeCookie('token');
              removeCookie('user');

              Toast(['top-end', '#f5f5fc']).fire({
                icon: 'success',
                title: 'Logged out succesfully.',
              });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
