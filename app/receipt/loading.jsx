import React from "react";

function Loading() {
  return (
    <div role="status" class="space-y-2.5 animate-pulse w-full py-8">
      {Array(12)
        .fill(0)
        .map((_, i) => {
          return (
            <div class="grid grid-cols-11 w-full" key={crypto.randomUUID()}>
              <div class="h-8 bg-gray-200 dark:bg-gray-700 w-32"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
            </div>
          );
        })}
        <div class="grid grid-cols-11 w-full">
              <div class="h-20 bg-gray-200 dark:bg-gray-700 w-32"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div class="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
            </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;
