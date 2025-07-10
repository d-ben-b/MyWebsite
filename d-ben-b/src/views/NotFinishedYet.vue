<template>
  <div class="min-h-screen not-finished-container">
    <div class="content-box">
      <h1 class="text-rose-900">{{ title }}</h1>
      <div class="divider"></div>
      <div class="construction-icon">
        <i class="fas fa-tools"></i>
      </div>
      <h2>Coming Soon</h2>
      <p
        >This section is currently under development and will be available
        soon.</p
      >
      <p class="details">{{ description }}</p>
      <router-link to="/" class="home-button"> Return to Homepage </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotFinishedYet",
    props: {
      title: {
        type: String,
        default: "Under Construction",
      },
      description: {
        type: String,
        default:
          "We're working hard to bring you this content. Check back soon!",
      },
    },
  };
</script>

<style scoped>
  .not-finished-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
  }

  .content-box {
    max-width: 600px;
    padding: 2.5rem;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #555;
  }

  .divider {
    width: 60px;
    height: 4px;
    background-color: #007bff;
    margin: 1rem auto 2rem;
    border-radius: 2px;
  }

  .construction-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    color: #007bff;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 1rem;
  }

  .details {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-style: italic;
  }

  .home-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .home-button:hover {
    background-color: #0056b3;
  }
</style>
