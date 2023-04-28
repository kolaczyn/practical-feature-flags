export function About() {
  return (
    <>
      <h2>Toggle in css</h2>
      <p>
        Sometimes you have to edit your css in order to implement a feature
        <br />
        Which is not ideal - it probably means that you have way too much going
        on in your css.
        <br />
        But if you don't have any other way - see the very end of{" "}
        <code>index.scss</code> and inside <code>App.tsx</code>
      </p>
      <p>
        Basially, you add a <code>class</code> which tells css which case we're
        and, and set css rules accordingly. Keep in mind, that the old code
        should not interfere with the new one. That's because you might rely on
        some of the rules in the new code, and the website doesn't look so good
        once you delete the old code.
      </p>
    </>
  );
}
