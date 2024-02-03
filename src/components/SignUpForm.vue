<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="email">Email</label>
      <input type="email" v-model="email" required />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" v-model="password" required />
    </div>
    <div class="input-group">
      <label for="password">Role</label>
      <select v-model="role" required>
        <option value="">Select</option>
        <option value="designer">Web designer</option>
        <option value="manager">Product manager</option>
      </select>
    </div>
    <div class="input-group">
      <label for="skillTemp">Skill set</label>
      <input type="text" v-model="skillTemp" @keyup="handleSkillInput" />
    </div>
    <div class="skills">
      <div v-for="skill in skills">
        <p :key="skill" class="skill">{{ skill }}</p>
      </div>
    </div>
    <div class="input-group">
      <label for="agree">
        <input type="checkbox" id="agree" v-model="agree" required />
        <span> Agree to our privacy policy </span>
      </label>
    </div>
    <div>
      <button>Submit</button>
    </div>
    <label v-if="email">Email: {{ email }}</label>
    <label v-if="password">Password: {{ password }}</label>
    <label v-if="role">Role: {{ role }}</label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      agree: false,
      skillTemp: "",
      skills: [],
    };
  },
  methods: {
    handleSkillInput(e) {
      if (e.key === "," && !this.skills.includes(this.skillTemp)) {
        const skill = this.skillTemp.substring(0, this.skillTemp.length - 1);
        this.skills = [...this.skills, skill];
        this.skillTemp = "";
      }
    },
    handleSubmit() {
      console.log({
        email: this.email,
        role: this.role,
        skills: this.skills,
      });
      this.email = "";
      this.password = "";
      this.role = "";
      this.skills = [];
      this.agree = false;
      this.skillTemp = "";
    },
  },
};
</script>

<style scoped>
form {
  background-color: aliceblue;
  text-align: left;
  min-height: 600px;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: auto;
  border: 1px solid rgb(215, 182, 182);
  border-radius: 10px;
  padding: 40px 50px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

input,
select {
  width: 70%;
  border-radius: 10px;
  height: 40px;
  border: 1px solid rgb(215, 182, 182);
  padding: 0 10px;
}
input[type="checkbox"] {
  width: 20px;
}
.skills {
  display: flex;
  gap: 10px;
}
.skill {
  background-color: rgb(215, 182, 182);
  border: 1px solid aliceblue;
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 12px;
  color: rgb(21, 123, 123);
  text-transform: capitalize;
}
button {
  border: none;
  background-color: rgb(0, 145, 242);
  padding: 10px 20px;
  width: 50%;
  border-radius: 10px;
  color: aliceblue;
  font-weight: 600;
}
</style>
