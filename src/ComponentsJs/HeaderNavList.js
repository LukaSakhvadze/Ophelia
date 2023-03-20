import React from "react";
import {HashLink} from 'react-router-hash-link'
import { Link } from 'react-router-dom'

function HeaderNavList() {
  return (
    <>
      <li>
        <HashLink to="#videos">Videos</HashLink>
      </li>
      <li>
        <HashLink to="#history">History</HashLink>
      </li>
      <li>
        <HashLink to="#menus">Menus</HashLink>
      </li>
      <li>
        <Link
          to="https://merchantshospitality.tripleseat.com/party_request/20400"
          target="_blank"
        >
          Private Events
        </Link>
      </li>
      <li>
        <HashLink to="#gallery">Gallery</HashLink>
      </li>
      <li>
        <HashLink to="#press">Press</HashLink>
      </li>
      <li>
        <HashLink to="#locationAndHours">Location and hours</HashLink>
      </li>
      <li>
        <a
          href="https://www.paycomonline.net/v4/ats/web.php/jobs?jobSearchSettingsId=1282&clientkey=EAF3236FCC65BC7042F369D93B0CE2A1"
          target="_blank"
        >
          Join our team
        </a>
      </li>
      <li>
        <Link to="/reservation">Reservations</Link>
      </li>
    </>
  );
}

export default HeaderNavList;
