package com.rechargezone.rechargezone.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminResponse {
    private long id;
    private String fname;
    private String lname;
    private String email;
    private String phone;
    private String password;
}
