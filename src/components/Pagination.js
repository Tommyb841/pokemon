import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous Page</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next Page</button>}
    </>
  );
}
