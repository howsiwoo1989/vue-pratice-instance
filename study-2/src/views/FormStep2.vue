<!--
================================================
1p - 가입 정보(아이디, 비밀번호, 비밀번호 힌트)
2p - 개인정보(이름, 전화번호, 이메일)
3p - 부가정보(직업, 가입경로)
================================================
-->
<template>
    <div class="join_content">
        <h1>회원가입 - 개인정보</h1>
        <div class="row_group">
            <div class="join_row">
                <h3 class="join_title">이름</h3>
                <span class="ps_box box_right_space">
                    <input class="int" type="text" placeholder="이름을 입력해주세요" maxlength="20" />
                </span>
                <span class="error_next_box" v-if="false">이름을 입력하세요</span>
            </div>

            <div class="join_row join_birthday">
                <h3 class="join_title">생년월일</h3>
                <div class="bir_wrap">
                    <div class="bir_yy">
                        <span class="ps_box">
                            <select id="mm" class="sel">
                                <option value="">년</option>
                                <option v-for="(item, index) in yyyyList" :key="index" :value="item.value">
                                    {{ item.text }}
                                </option>
                            </select>
                        </span>
                    </div>
                    <div class="bir_mm">
                        <span class="ps_box">
                            <select id="mm" class="sel">
                                <option value="">월</option>
                                <option v-for="(item, index) in mmlist" :key="index" :value="item.value">
                                    {{ item.text }}
                                </option>
                            </select>
                        </span>
                    </div>
                    <div class="bir_dd">
                        <span class="ps_box">
                            <input placeholder="일" type="text" class="int" maxlength="2" />
                        </span>
                    </div>
                </div>
                <span class="error_next_box" v-if="false">생년월일을 입력하세요</span>
            </div>

            <div class="join_row join_sex">
                <h3 class="join_title">성별</h3>
                <span class="ps_box gender_code">
                    <select class="sel">
                        <option value="">성별</option>
                        <option v-for="(item, index) in genderList" :key="index" :value="item.value">
                            {{ item.text }}
                        </option>
                    </select>
                </span>
                <span class="error_next_box">성별을 선택하세요</span>
            </div>

            <span class="error_next_box" id="genderMsg"></span>

            <div class="join_row join_email">
                <h3 class="join_title">
                    <label for="email">이메일<span class="terms_choice"></span></label>
                </h3>
                <span class="ps_box int_email box_right_space">
                    <input type="text" placeholder="이메일을 입력해주세요" class="int" maxlength="100" />
                </span>
                <span class="error_next_box">이메일을 입력해주세요</span>
            </div>

            <div class="join_row">
                <h3 class="join_title">주소</h3>
                <span class="ps_box box_right_space">
                    <input type="text" class="int" placeholder="주소를 입력해주세요" maxlength="100" />
                </span>
                <span class="error_next_box">주소를 입력해주세요</span>
            </div>
            <div class="join_row">
                <h3 class="join_title">휴대폰번호</h3>
                <span class="ps_box box_right_space">
                    <input class="int" type="text" placeholder="휴대폰 번호를 입력해주세요" maxlength="11" />
                </span>
                <span class="error_next_box" v-if="false">휴대폰 번호를 입력해주세요</span>
            </div>
        </div>
        <div class="btn_area">
            <router-link to="/FormStep3">
                <button type="button" class="btn_type btn_primary">다음 페이지</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormStep2',
    data() {
        return {
            genderList: [
                {
                    value: 'M',
                    text: '남성'
                },
                {
                    value: 'F',
                    text: '여성'
                }
            ],
            yyyyList: [],
            mmlist: []
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {}
};
</script>
