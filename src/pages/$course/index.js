import React from 'react';
import Link from 'umi/link';

export default function Course(props) {
  return (
    <div>
      {props.course}
      <Link to="/aaa">aaa</Link>
      <Link to="/bbb">bbb</Link>
    </div>
  );
}

Course.getInitialProps = context => {
  const { store, location, isServer, route } = context;
  console.log(route.params.course);
  return { course: route.params.course };
};
