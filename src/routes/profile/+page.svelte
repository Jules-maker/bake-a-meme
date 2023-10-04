<script>
    import { isAuthenticated, username, logout } from '$lib/auth.js';
</script>
{#if $isAuthenticated}
    <p>Logged in</p>
{:else}
    <p>Logged out</p>
{/if}