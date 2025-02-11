```javascript
// Example showing the issue with Tailwind's `@apply` directive and conflicting styles
<div class="bg-red-500 @apply bg-blue-500">
  <p>This div should be blue, but might be red or a mix due to conflicting styles.</p>
</div>
```