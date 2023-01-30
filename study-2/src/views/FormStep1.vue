<!--
================================================
1p - 가입 정보(아이디, 비밀번호, 비밀번호 힌트)
2p - 개인정보(이름, 전화번호, 이메일)
3p - 부가정보(직업, 가입경로)
================================================
-->

<template>
    <div class="join_content">
        <h1>회원가입 - 가입정보</h1>
        <!-- 아이디, 비밀번호 입력 -->
        <div class="row_group">
            <div class="join_row">
                <h3 class="join_title">아이디</h3>
                <span class="ps_box">
                    <input class="int" type="text" maxlength="20" />
                </span>
                <span class="error_next_box" v-if="false">필수 정보입니다.</span>
            </div>

            <div class="join_row">
                <h3 class="join_title">비밀번호</h3>
                <span class="ps_box">
                    <input class="int" type="password" maxlength="16" />
                </span>
                <span class="error_next_box" v-if="false">유효하지 않은 비밀번호 입니다.</span>

                <h3 class="join_title">비밀번호 재확인</h3>
                <span class="ps_box">
                    <input class="int" type="password" maxlength="16" />
                </span>
                <span class="error_next_box" v-if="false">비밀번호가 동일하지 않습니다.</span>

                <h3 class="join_title">비밀번호 힌트</h3>
                <select class="sel" size="1">
                    <option value="">선택하세요</option>
                    <option v-for="(item, index) in pwhintList" :key="index" :value="item.value">
                        {{ item.text }}
                    </option>
                </select>

                <h3 class="join_title">답변</h3>
                <span class="ps_box">
                    <input class="int" />
                </span>
            </div>
        </div>
        <!-- // 아이디, 비밀번호 입력 -->
        <div class="btn_area">
            <router-link to="/FormStep2">
                <button type="button" class="btn_type btn_primary">다음 페이지</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormStep1',
    data() {
        return {
            pwhintList: [
                {
                    value: 1,
                    text: '졸업한 초등학교 이름은?'
                },
                {
                    value: 2,
                    text: '아버지 성함은?'
                },
                {
                    value: 3,
                    text: '어머니 성함은?'
                },
                {
                    value: 4,
                    text: '어릴 적 내 별명은?'
                },
                {
                    value: 5,
                    text: '좋좋아하는 색깔은?'
                }
            ]
        };
    }
};
</script>
