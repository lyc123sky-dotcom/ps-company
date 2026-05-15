-- =====================================================
-- PS Company - Initial Schema
-- 크리에이터, 문의, BJ 지원 테이블
-- =====================================================

-- 크리에이터 (BJ) 테이블
create table public.creators (
  id uuid primary key default gen_random_uuid(),
  display_order int not null default 0,
  profile_image_url text,
  is_active boolean not null default true,
  -- 닉네임은 미공개 방침이지만 추후 변경 가능성 위해 컬럼만 마련
  name text,
  category text, -- '게임' | '소통' | '음악' | '댄스' | etc
  -- SNS 링크 (선택사항)
  youtube_url text,
  chzzk_url text,
  soop_url text,
  tiktok_url text,
  instagram_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index creators_display_order_idx on public.creators(display_order);
create index creators_is_active_idx on public.creators(is_active);

-- 일반 문의
create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  message text not null,
  status text not null default 'new', -- 'new' | 'read' | 'replied' | 'archived'
  created_at timestamptz not null default now()
);

create index inquiries_status_idx on public.inquiries(status);
create index inquiries_created_at_idx on public.inquiries(created_at desc);

-- BJ 지원 (모집)
create table public.recruit_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  age int,
  gender text, -- 'male' | 'female' | 'other'
  phone text not null,
  email text,
  -- 모집 부문
  category text not null, -- 'personal' (개인 컨텐츠) | 'crew' (크루 게스트)
  experience text, -- 방송 경력 (자유 입력)
  introduction text not null, -- 자기소개
  preferred_contact text, -- '전화' | '카톡' | '이메일'
  status text not null default 'submitted', -- 'submitted' | 'reviewing' | 'interview' | 'accepted' | 'rejected'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index recruit_applications_status_idx on public.recruit_applications(status);
create index recruit_applications_created_at_idx on public.recruit_applications(created_at desc);

-- updated_at 자동 갱신 트리거
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger creators_set_updated_at
  before update on public.creators
  for each row execute function public.set_updated_at();

create trigger recruit_applications_set_updated_at
  before update on public.recruit_applications
  for each row execute function public.set_updated_at();

-- =====================================================
-- Row Level Security (보안)
-- =====================================================
alter table public.creators enable row level security;
alter table public.inquiries enable row level security;
alter table public.recruit_applications enable row level security;

-- creators: 활성 크리에이터는 누구나 조회 가능
create policy "Anyone can view active creators"
  on public.creators for select
  using (is_active = true);

-- inquiries: 누구나 등록 가능, 조회는 인증된 admin만 (추후 정책)
create policy "Anyone can submit inquiries"
  on public.inquiries for insert
  with check (true);

-- recruit_applications: 누구나 등록 가능, 조회는 admin만 (추후)
create policy "Anyone can submit applications"
  on public.recruit_applications for insert
  with check (true);
