import React from 'react';
import EmailItem from './EmailItem';
import { useSelector } from 'react-redux';

const EmailList = () => {
  const emails = useSelector((state) => state.user.mails);
  return (
    <div className="p-4">
      {emails.map((email, index) => (
        <EmailItem key={index} {...email}/>
      ))}
    </div>
  );
};

export default EmailList;
