import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string= ""
  members: string[] = []
  errorMsg: string = ""
  numberOfTeams: number  | ""=""
  teams: string[][]= []

  onInput(member: string){
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value)
  }

 addMember() {
  if(!this.newMemberName){
    this.errorMsg = "Name can't be empty"
    return
  }
  this.errorMsg = ""
  this.members.push(this.newMemberName)
  this.newMemberName = ''
 }

 generateTeams(){

  if(!this.numberOfTeams || this.numberOfTeams <=0){
    this.errorMsg = 'Invalid number of teams'
    return
  }

  if(this.members.length < this.numberOfTeams){
    this.errorMsg = "Not enough members"
  }

  const allMembers = this.members
  console.log(allMembers)

  const testMembers = [...this.members]
  console.log(testMembers)

  while(allMembers.length>0){
    for(let i=0; i<this.numberOfTeams; i++){
      const randomIndex = Math.floor(Math.random() * allMembers.length)
      const selectedMember = allMembers.splice(randomIndex,1)[0]

      if(!selectedMember) break

      if(this.teams[i]){
        this.teams[i].push(selectedMember)
      }else{
        this.teams[i] = [selectedMember]
      }
    }
  }

   console.log(this.teams)
 }


}
