<!--
================================================
1p - 가입 정보(아이디, 비밀번호, 비밀번호 힌트)
2p - 개인정보(이름, 전화번호, 이메일)
3p - 부가정보(직업, 가입경로)
================================================
-->
<template>
    <div class="join_content">
        <h1>회원가입 - 부가정보</h1>
        <!-- 아이디, 비밀번호 입력 -->
        <div class="row_group">
            <div class="join_row">
                <h3 class="join_title">직업</h3>
                <select class="sel" size="1">
                    <option value="">선택하세요</option>
                    <option v-for="(item, index) in jobList" :key="index" :value="item.value">
                        {{ item.text }}
                    </option>
                </select>
            </div>
            <div class="join_row">
                <h3 class="join_title">가입경로</h3>
                <select class="sel" size="1">
                    <option value="">선택하세요</option>
                    <option v-for="(item, index) in locationList" :key="index" :value="item.value">
                        {{ item.text }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormStep3',
    data() {
        return {
            job: '',
            location: '',
            jobList: [
                {
                    value: 1,
                    text: '학생'
                }
            ],
            locationList: [
                {
                    value: 1,
                    text: '인터넷'
                }
            ]
        };
    },
    computed: {},
    created() {},
    methods: {}
};
</script>
