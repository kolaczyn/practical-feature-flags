export function About() {
  return (
    <>
      <h2>Read From Environment Variables</h2>
      <p>
        Ideally, you want to be able to toggle feature without the need to
        change the code
        <br />
        You may set this up many different ways, and a lot is depending on you
        specific setup - e.g. what framework you're using
        <br />
        In this example you have to rebuild the app in order to change the
        flags, but in some cases you can use the same build - you just have to
        change the env variable.
        <br />
        In order to change toggle features in this example, edit the .env file,
        or set the environment variables during build
      </p>
    </>
  );
}
