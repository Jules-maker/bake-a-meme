<script>
        import Chart from 'chart.js/auto';

import { onMount } from 'svelte';
import { isAuthenticated, isAdmin } from '$lib/auth.js';

onMount(async () => {
    users = await getUsers();
    console.log(users);
});


const idToken = typeof localStorage !== 'undefined' ? localStorage.getItem('id_token') : null;
let users = [];
let userChart;


async function getUsers() {
    const response = await fetch('http://localhost:8080/api/admin/users', {
        headers: {
            Authorization: `Bearer ${idToken}`,
        },
    });
    const data = await response.json();
    return data;
}


onMount(async () => {
    users = await getUsers();
    updateChart();
});


function updateChart() {
    const userCount = users.length;
    const nonAdminCount = users.filter(user => user.authorities.includes('ROLE_USER')).length;
     const adminCount = users.filter(user => user.authorities.includes('ROLE_ADMIN')).length + nonAdminCount; 

    const ctx = document.getElementById('userChart').getContext('2d');

    if (userChart) {
        userChart.destroy(); // Détruire l'ancien graphique s'il existe
    }

    userChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Admins', 'Utilisateurs'],
            datasets: [{
                data: [adminCount - nonAdminCount, nonAdminCount],
                backgroundColor: ['#3490dc', '#f56565'],
                hoverOffset: 4
            }]
        }
    });
}
</script>
{#if $isAuthenticated && isAdmin()}

<div class="mt-6 w-80 mx-auto">
    <canvas id="userChart" width="200" height="200" class="rounded-md p-2  "></canvas>
</div>
{/if}