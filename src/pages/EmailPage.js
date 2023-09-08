import React from 'react'
import LeftTable from "../components/LeftTable";
import RightTable from "../components/RightTable";

function EmailPage() {
  return (
    <div className="flex flex-col sm:flex-row p-5">
    <LeftTable />
    <RightTable />
  </div>
  )
}

export default EmailPage