<template>
  <div class="row">
    <div class="col">
      <div class="card mb-3 bg-primary-color" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg"
              class="card-img"
              alt="poster-book"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-capitalize third-color">
                {{title}}
                <span class="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="third-color trash-icon"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path
                      d="
                      M19
                      6v14a2 2 0 0 1-2
                      2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </span>
              </h5>
              <p class="card-text third-color">
                {{description}}
              </p>
              <p class="card-text text-capitalize">
                <small class="text-muted">published at {{publishedDate}}</small>
              </p>
            </div>
            <div class="card-footer">
              <p
                class="
                fifth-color
                text-center
                text-capitalize
                "
              >
                created at {{createdDate}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    title: String,
    description: String,
    publishedDate: String,
    createdDate: String,
  },
};
</script>
