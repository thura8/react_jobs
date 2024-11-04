import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  //add new job
  // const addJob = async (newJob) => {
  //   const res = await fetch("/api/jobs", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newJob),
  //   });
  //   return;
  // };

  const addJob = async (newJob) => {
    const res = await fetch("/jobs.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  //delete job

  // const deleteJob = async (id) => {
  //   const res = await fetch(`/api/jobs/${id}`, {
  //     method: "DELETE",
  //   });
  //   return;
  // };

  const deleteJob = async (id) => {
    const res = await fetch(`/jobs.json}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    return;
  };

  //Update Job

  // const updateJob = async (job) => {
  //   const res = await fetch(`/api/jobs/${job.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(job),
  //   });
  //   return;
  // };

  const updateJob = async (job) => {
    const res = await fetch(`/jobs.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
