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
        In this case, we wanted to add the ability to save todos to the local
        storage. Quite a few changes had to be made, so it made a lot more sense
        to toggle all the feature
      </p>
      <p>
        I know what some of you might be thinking "I have to toggle every single
        feature like this? This is ridiculous". And depending on your use case,
        this might be an overkill <br />
        This feature is quite trivial, but if you are working on a huge feature
        which could take quite a few sprints to complete, it might be worth it.
        <br />
        It might not be necessary if you are a single developer working on the
        codebase, and you case release the code whenever you want.
        <br />
        But it is worth considering this approach, if you have to cooperate with
        many different developers on different teams
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
