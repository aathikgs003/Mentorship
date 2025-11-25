import React from "react";
import { useForm } from "react-hook-form";
import Card from "../components/Card";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import { ACTIVE_THEME, themes } from "../theme/UITheme";
import BackToDashboard from "../components/BackToDashboard";
export default function MentorRegistration() {
  const { register, handleSubmit } = useForm();
  const styles = themes[ACTIVE_THEME] || themes[2];
  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <div className={styles.pageBg}>
      <div className="max-w-2xl mx-auto">
        <Card>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">👔</div>
            <div>
              <h3 className="text-2xl font-semibold">Mentor Registration</h3>
              <p className={`text-sm ${styles.mutedText}`}>Share experience and mentor students</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField label="Email" name="email" register={register} />
            <InputField label="Full Name" name="fullName" register={register} />
            <InputField label="Designation" name="designation" register={register} />
            <InputField label="Current Company" name="company" register={register} />
            <InputField label="Branch" name="branch" register={register} />
            <InputField label="Passed Out Year" name="year" register={register} />
            <InputField label="Contact Number" name="contact" register={register} />
            <SelectField label="Area of Interest" name="interest" register={register} options={["AI", "Web", "Data"]} />

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">What kind of support can you provide?</label>
              <textarea {...register("support")} className={`${styles.input} w-full h-28`} />
            </div>

            <div className="mt-4">
              <button type="submit" className={styles.button + " w-full"}>
                Submit
              </button>
            </div>
          </form>
          
        </Card>
        <BackToDashboard />
      </div>
    </div>
  );
}
