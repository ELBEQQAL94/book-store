<template>
  <div>
    <form>
      <div class="form-group">
        <label for="email1">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" />
      </div>

      <button type="submit" class="btn btn-primary">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
};
</script>
