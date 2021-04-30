const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      "academy_login_section/authenticateUserCredentials/",
      {
        target:
          "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
        secure: false,
        changeOrigin: true,
      }
    )
  );

  app.use(
    createProxyMiddleware(
      "academy_login_section/academy_signin/updatePassword/",
      {
        target:
          "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
        secure: false,
        changeOrigin: true,
      }
    )
  );

  app.use(
    createProxyMiddleware("academy_course_section/getUserEnrolledCourses/", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("academy_course_section/getProgramListByCourseId/", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("academy_course_section/getSessionListByModuleId/", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("academy_course_section/getSegmentDtlsBySegmentId/", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("academy_course_section/getWorkshopListByModuleId/", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("academy_course_section/getAssessmentByModuleId/", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("academy_course_section/uploadToS3Bucket/", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware(
      "academy_course_section/getUserSubmissionsByAssessmentId/",
      {
        target:
          "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
        secure: false,
        changeOrigin: true,
      }
    )
  );
  app.use(
    createProxyMiddleware("academy_course_section/postUserAssessmentFiles", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware(
      "academy_course_section/getAdditionalResourcesByModuleId/",
      {
        target:
          "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
        secure: false,
        changeOrigin: true,
      }
    )
  );
  app.use(
    createProxyMiddleware("academy_course_section/postErrorReport", {
      target:
        "https://my-loadbalancer-1932033183.us-east-2.elb.amazonaws.com/flaskapp/",
      secure: false,
      changeOrigin: true,
    })
  );
};
