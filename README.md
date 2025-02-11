# Tailwind CSS @apply Directive Conflict

This repository demonstrates a common issue encountered when using Tailwind CSS's `@apply` directive: conflicting styles caused by the order of directives or accidental overrides.  The solution showcases techniques to resolve this conflict and ensure predictable styling.

## Bug Description
The `@apply` directive applies pre-defined Tailwind CSS utility classes. If multiple `@apply` directives conflict (e.g., setting the same style property to different values), the last one applied takes precedence. This can lead to unpredictable results, making debugging difficult.

## Solution
The solution shows how to prioritize styles using specificity or by refactoring CSS classes to avoid conflicts. It's crucial to be mindful of the order of directives when applying multiple styles with `@apply`. 