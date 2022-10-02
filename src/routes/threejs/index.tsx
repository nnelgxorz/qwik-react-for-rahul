import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ThreeJS } from "~/integrations/react/three";

export default component$(() => {
  return (
    <div>
      <h1>The component below is a React Three Fiber Component:</h1>
      <ThreeJS client:visible />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik ThreeJS',
};
