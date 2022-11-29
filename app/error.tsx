"use client";

interface ErrorProps {
  error: any;
  reset: any;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
