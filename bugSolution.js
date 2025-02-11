```javascript
// Solution 1: Using Utility-First Approach - avoid @apply all together
<div class="bg-blue-500">
  <p>This div is now consistently blue.</p>
</div>

// Solution 2: Prioritize Styles with Specificity (if using @apply is necessary)
<div class="!bg-blue-500 @apply bg-red-500">
  <p>Using `!` for important ensures blue takes precedence.</p>
</div>

// Solution 3: Refactor for Clarity (best practice)
/* Define a custom class in your stylesheet to encapsulate styles. */
/* ...your tailwind.css file...
.my-blue-background {
  @apply bg-blue-500;
}
*/
<div class="my-blue-background">
 <p>Using custom classes eliminates conflicts.</p>
</div>
```