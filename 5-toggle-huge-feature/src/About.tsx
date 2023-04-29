export function About() {
  return (
    <>
      <h2>Toggle Huge Feature</h2>
      <p>
        What to do when you have to modify small bits of a big, monolithic
        feature?
      </p>
      <p>
        Hopefully, the feature is located in just one folder. In that case, all
        you have to do, is copy the folder, and work on the new one.
      </p>
      <p>
        If the feature is scattered across many different folders, consider
        these solutions:
      </p>
      <ul>
        <li>
          Try to organize the features into one folder. Keep in mind that it's
          not viable if is very hard and/or you have a strict deadline
        </li>
        <li>
          Have feature flag for every single place you have to change code
        </li>
        <li>
          Just use regular long lasting feature branch, but keep rememer to
          regularly pull changes from main, to avoid huge merge conflicts down
          the line
        </li>
      </ul>
    </>
  );
}
