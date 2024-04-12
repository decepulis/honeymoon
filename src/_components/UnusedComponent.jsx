// this component's just here to illustrate that
// even if we import this component, once we move to server components
// it's not going to be shipped to the client unless it's used.
//
// Want proof? Search for "UnusedComponent" in the main bundle
// when you're running in pages dir (it's there) and in app dir (it's not).

export default function UnusedComponent() {
  return <div>We never use this component</div>;
}
