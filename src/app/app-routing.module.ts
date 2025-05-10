import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AneekaComponent } from './components/projects/aneeka/aneeka.component';
import { LanguageGuard } from './services/language/language.guard';
import { NekagochiComponent } from './components/projects/nekagochi/nekagochi.component';
import { AiosuComponent } from './components/projects/ai-osu/ai-osu.component';
import { FoodScholarshipAppComponent } from './components/projects/food-scolarship/food-scholarship.component';
import { MinecraftBotComponent } from './components/projects/minecraft-bot/minecraft-bot.component';
import { MoodnetComponent } from './components/projects/moodnet/moodnet.component';
import { EnergyComponent } from './components/projects/energy-monitoring/energy.component';

const routes: Routes = [
  {
    path: ':language',
    canActivate: [LanguageGuard],
    children: [
      { path: '',     component: HomeComponent },
      { path: 'proyectos', component: ArchiveComponent },
      { path: 'aneeka',    component: AneekaComponent },
      { path: 'nekagochi',    component: NekagochiComponent },
      { path: 'ai-osu',    component: AiosuComponent },
      { path: 'food-scholarship',    component: FoodScholarshipAppComponent },
      { path: 'minecraft-bot',    component: MinecraftBotComponent },
      { path: 'moodnet',    component: MoodnetComponent },
      { path: 'monitoring-energy',    component: EnergyComponent },
    ]
  },
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  { path: '**', redirectTo: '/en' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
