package model

type Person struct {
	ID         int    `json:"id"`
	Firstname  string `json:"firstName"`
	Lastname   string `json:"lastName"`
	Birthday   string `json:"birthday"`
	Mail       string `json:"mail"`
	Phone      string `json:"phone"`
	Profession string `json:"profession"`
}
