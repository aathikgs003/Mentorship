import React from "react";
import { useForm } from "react-hook-form";
import Card from "../components/Card";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import { ACTIVE_THEME, themes } from "../theme/UITheme";

export default function MenteeRegistration() {
  const { register, handleSubmit } = useForm();
  const styles = themes[ACTIVE_THEME] || themes[2];
  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <div className={styles.pageBg}>
      <div className="max-w-2xl mx-auto">
        <Card>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">👤</div>
            <div>
              <h3 className="text-2xl font-semibold">Mentee Registration</h3>
              <p className={`text-sm ${styles.mutedText}`}>Register as a mentee to join the program</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField label="Email Address" name="email" register={register} placeholder="you@example.com" />
            <InputField label="Full Name" name="fullName" register={register} placeholder="Your full name" />
            <InputField label="Branch" name="branch" register={register} placeholder="CSE / ECE / ... " />
            <InputField label="Batch" name="batch" register={register} placeholder="2021" />
            <InputField label="Contact Number" name="contact" register={register} placeholder="+91 9XXXXXXXXX" />
            <SelectField label="Area of Interest" name="interest" register={register} options={["AI", "Web Development", "Data Science"]} />

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea {...register("description")} placeholder="Background, goals" className={`${styles.input} w-full h-28`} />
            </div>

            <div className="mt-4">
              <button type="submit" className={styles.button + " w-full"}>
                Submit
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
