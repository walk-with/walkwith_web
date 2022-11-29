"use client";

interface ErrorProps {
  error: any;
  reset: any;
}

//  TODO: Error Fallback Screen
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
