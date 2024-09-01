import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const announceEditAction = async ({ request, params }) => {
  const formData = await request.formData();
  switch (request.method.toLowerCase()) {
    case "put": {
      await myAxios.put(`/api/announce/${params.id}`, {
        job_title: formData.get("job_title"),
        location: formData.get("location"),
        description: formData.get("description"),
        min_salary: formData.get("min_salary"),
        max_salary: formData.get("max_salary"),
        benefits: formData.get("benefits"),
        job_type: formData.get("job_type"),
        telework: formData.get("telework"),
      });
      return redirect(`/`);
    }
    case "delete": {
      await myAxios.delete(`/api/announce/${params.id}`);
      return redirect(`/`);
    }

    default:
      throw new Response("", { status: 405 });
  }
};

export default announceEditAction;
